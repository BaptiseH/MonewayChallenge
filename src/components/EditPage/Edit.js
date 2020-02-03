import React from 'react';
import { useParams, useHistory } from 'react-router';
import './Edit.css'
import EditForm from './EditForm'


function Edit(props) {
    let { id } = useParams();
    let path = useHistory();
    return (
        <EditForm id={id} history={path} />
    )
}
export default Edit