import React from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../design/Edit.css'
import { Button } from '@material-ui/core';


class EditForm extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            user: {
                firstname:'',
                lastname:'',
                email:'',
            },
            adress: {
                number:'',
                street:'',
                postcode:'',
                city:'',
            },
        };
      }

    adressService (id) {
        return axios.get('/moneway/adress/' + id)
    }
    
    userService(id) {
        return axios.get('/moneway/user/' + id)
    }

    componentDidMount() {
        this._isMounted = true;
        this.userService(this.state.id)
        .then((value) => {
        if (this._isMounted) {
            this.setState({user:value.data})
        }})
        this.adressService(this.state.id)
        .then((value) => {
            if (this._isMounted) {
            this.setState({adress:value.data})
        }})
      }

      componentWillUnmount() {
        this._isMounted = false;
      }

    saveValue() {
        axios.patch('/moneway/user/' + this.state.id, this.state.user)
        axios.patch('/moneway/adress/' + this.state.id,  this.state.adress)
    }

    render() {
        return (
            <div className="form">
      <h2>Edit Profile</h2>
      <Formik
        enableReinitialize
        initialValues={{
            firstname: this.state.user.firstname,
            lastname: this.state.user.lastname,
            email: this.state.user.email,
            number: this.state.adress.number,
            street: this.state.adress.street,
            postcode: this.state.adress.postcode,
            city: this.state.adress.city,
        }
        }
        validate={values => {
          const errors = {};
          if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
            setTimeout(() => {
                this.setState({
                    user: {email: values.email},
                    adress: {
                        number: values.number,
                        street: values.street,
                        postcode: values.postcode,
                        city: values.city,
                    }
                })
                this.saveValue()
                alert("Your account has been updated successfuly")
                this.props.history.replace("/user/"+ this.state.id);
                actions.setSubmitting(false);
            }, 400);
        }}>
            {
            ({
                isSubmitting
            }) =>(
            <Form >
            <h3 className="label">Firstname</h3>
            <Field className="field" variant="outlined" type="text" name="firstname" />
            <ErrorMessage name="firstname" component="div" />
            <h3 className="label">Lastname</h3>
            <Field className="field" variant="outlined" type="text" name="lastname" />
            <ErrorMessage name="lastname" component="div" />
            <h3 className="label">Email</h3>
            <Field className="field" variant="outlined" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <h3 className="label">Number</h3>
            <Field className="field" variant="outlined" type="number" name="number"  />
            <ErrorMessage name="number" component="div" />
            <h3 className="label">Street</h3>
            <Field className="field" variant="outlined"type="text" name="street"   />
            <ErrorMessage name="street" component="div" />
            <h3 className="label">Postcode</h3>
            <Field className="field" variant="outlined" type="text" name="postcode"  />
            <ErrorMessage name="postcode" component="div" />
            <h3 className="label">City</h3>
            <Field className="field" variant="outlined" type="text" name="city"  />
            <ErrorMessage name="city" component="div" />
            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            </Form>
            )
        }
        </Formik>
    </div>
        )
    }
}

function Edit() {
    let {id} = useParams();
    let path = useHistory();
    return (
        <EditForm id={id} history={path}/>
    )
} 
  export default Edit;