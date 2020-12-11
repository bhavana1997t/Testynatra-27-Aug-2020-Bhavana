package com.tyss.stockmanagement.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.tyss.stockmanagement.dto.UserDTO;
import com.tyss.stockmanagement.entites.Investor;
import com.tyss.stockmanagement.entites.User;

@Repository
public class UserDAOImpl implements UserDAO {
	@PersistenceContext
	EntityManager manager;

	@Override
	@Transactional
	public User addUser(User user) {
		manager.persist(user);
		return user;
	}

	@Override
	@Transactional
	public User removeUser(int userID) {
		User user1 = manager.find(User.class, userID);
		if (user1 != null) {
			manager.remove(user1);
			return user1;
		} else {
			return null;
		}
	}
	
	@Override
	@Transactional
	public List<User> getAllUsers() {
		return manager.createQuery("FROM User",User.class).getResultList();
	}
	

	@Override
	@Transactional
	public User updateUser(User user) {

		User user1 = manager.find(User.class, user.getUserId());
		if (user1 != null) {

			BeanUtils.copyProperties(user, user1);

			return user1;
		} else {
			manager.close();
			return null;
		}
	}

	@Override
	@Transactional
	public List<User> getUser(String userName) {

		TypedQuery<User> query = manager.createQuery("FROM User U Where U.userName=:value", User.class);
		query.setParameter("value", userName);
		List<User> userList = query.getResultList();
		List<User> user = null;
		if (userList.isEmpty()) {
			return user;
		} else {
			return userList;

		}
	}

	@Override
	public User authenticateUser(UserDTO user) {
		TypedQuery<User> query = manager.createQuery("FROM User U WHERE U.email= : mail AND U.password=:pwd",
				User.class);
		query.setParameter("mail", user.getEmail());
		query.setParameter("pwd", user.getPassword());
		User user1 = (User) query.getSingleResult();
		if (user != null) {
			return user1;
		} else {
			return null;
		}

	}
}
