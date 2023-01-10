import React from 'react';
import axios from 'axios';

const formStyle = {
    position: 'fixed',
    top: '70px',
    left: 'calc(100% - 400px)',
    maxWidth: '650px',
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '5px'
}

function RegisterForm() {


    const submitHandler = function (e) {
        const fd = new FormData(e.target);
        const user = Object.fromEntries(fd.entries());
        console.log('test')
        axios({
            url: 'http://localhost:5000/api/auth/signup',
            method: 'POST',
            data: user
        }).then(res => { if (res.status === 200) { alert('Successfully Registered') } })
            .catch(err => console.error(err));
        e.preventDefault();
    }

    return (
        <div className='border shadow' style={formStyle}>



            <div className="tab-content">
                
                {/* <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register"> */}
                    <form onSubmit={submitHandler}>
                        <div className="text-center mb-3">
                            <p className='h3'>Sign up</p>
                            {/* <button type="button" className="btn btn-secondary btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button type="button" className="btn btn-secondary btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>
                            <button type="button" className="btn btn-secondary btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-secondary btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button> */}
                        </div>
                        <p className="text-center">or:</p>
                        {/*<!-- Name input --> */}
                        <div className="form-outline mb-1">
                            <label className="form-label" htmlFor="registerName">Name</label>
                            <input type="text" id="registerName" name='name' className="form-control" />
                        </div>
                        {/*<!-- Username input --> */}
                        <div className="form-outline mb-1">
                            <label className="form-label" htmlFor="registerUsername">Username</label>
                            <input type="text" id="registerUsername" name='username' className="form-control" />
                        </div>
                        {/*<!-- Email input --> */}
                        <div className="form-outline mb-1">
                            <label className="form-label" htmlFor="registerEmail">Email</label>
                            <input type="email" id="registerEmail" name='email' className="form-control" />
                        </div>
                        {/*<!-- Password input --> */}
                        <div className="form-outline mb-1">
                            <label className="form-label" htmlFor="registerPassword">Password</label>
                            <input type="password" id="registerPassword" name='password' className="form-control" />
                        </div>
                        {/*<!-- Repeat Password input --> */}
                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                            <input type="password" id="registerRepeatPassword" name='confirm' className="form-control" />
                        </div>
                        
                        {/*<!-- Submit button --> */}
                        <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
                    </form>
                </div>
            {/* </div> */}
            {/*<!--Pills content--> */}
        </div>
    )
}

export default RegisterForm