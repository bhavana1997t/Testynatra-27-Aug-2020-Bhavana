import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Pop from './ManageStock'

class ComoanyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compData: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8080/StockManagement/company/companies"
        }).then((response) => {
            this.setState({ compData: response.data.data });
        });
    }
    render() {
        return (
            <>
                <Table striped bordered hover variant="light" className="m-0">
                    <thead>
                        <tr className="bg-dark text-light">
                            <th>Company Name</th>
                            <th>Email</th>
                            <th>Stocks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.compData.map((detail) =>(
                                <tr key={detail.companyId}>
                                    <td>{detail.companyName}</td>
                                    <td>{detail.user.email}</td>
                                    <td className="text-center"><Pop
                                        user={this.props.user}
                                        idata={this.props.idata}
                                        cname={detail}
                                        key={detail.companyId}
                                    /></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </>
        );
    }
}

export default ComoanyDetails;