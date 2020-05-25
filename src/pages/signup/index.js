import React from "react";
import Layout from "../../components/Layout";
import queryString from 'query-string';
import Constants from "../../Constants";

export default class SignupIndexPage extends React.Component {
    getCongratulationMessage(contactSource) {
        if (contactSource === Constants.First50) return "Thanks for signing up for Avni! We are super excited to have you on board.";
        if (contactSource === Constants.CustomPlan) return "Thanks for contacting us.";
        return "Ooops something went wrong. Please email us at - avni-project@googlegroups.com";
    }

    getSignupButtonLabel(contactSource) {
        if (contactSource === Constants.CustomPlan) return "CONTACT SALES";
        return `SIGNUP FOR FREE`;
    }

    getTitleMessage(contactSource) {
        if (contactSource === Constants.CustomPlan) return "Contact Avni Sales Team";
        return `Try Avni free for 90 days`;
    }

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            signeeName: "",
            email: "",
            emailIconStyle: "icon is-right"
        };
    }

    render() {
        const parsed = queryString.parse(this.props.location.search);
        const {status, signeeName, email} = this.state;
        const contactSource = parsed[Constants.ContactSource];
        return (
            <Layout>
                <div className="container">
                    <br/>
                    <br/>
                    <h3 className="title is-3 full-centered">{this.getTitleMessage(contactSource)}</h3>
                    <div className="columns">
                        <div className="column"/>
                        <div className="column">
                            {status === "SUCCESS" ?
                                <div>
                                    <p className="title is-3">Fantastic {signeeName} !!!</p>
                                    <br/>
                                    <p>{this.getCongratulationMessage(contactSource)}</p>
                                    <br/>
                                    <p>You will receive an email at {email} within one working day.</p></div>
                                :
                                <div style={{paddingHorizontal: 24}}>
                                    <form onSubmit={this.submitForm} method="post"
                                          action="https://formspree.io/xzbjebyr">
                                        <div className="field">
                                            <label className="label">Your Name</label>
                                            <div className="control has-icons-left has-label">
                                                <input className="input"
                                                       name="name"
                                                       type="text" placeholder="Full Name" required/>
                                                <span className="icon is-left">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Where do you work</label>
                                            <div className="control has-icons-left has-label">
                                                <input className="input"
                                                       type="text"
                                                       name="organisationName"
                                                       placeholder="Organisation Name"
                                                       required/>
                                                <span className="icon is-left">
                                                    <i className="fas fa-building"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field is-grouped">
                                            <div className="control">
                                                <label className="label">Organisation status</label>
                                                <div className="select">
                                                    <select required name="organisationStatus">
                                                        <option value="">Select dropdown</option>
                                                        <option value="Non-profit">Non-profit</option>
                                                        <option value="For-profit">For-profit</option>
                                                        <option value="Government">Government</option>
                                                        <option value="Personal">Personal</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="control">
                                                <label className="label">Country of organisation</label>
                                                <label className="radio">
                                                    <input type="radio" name="country" value="India" required="required"/>
                                                    <span style={{marginLeft: 8}}>India</span>
                                                </label>
                                                <label className="radio" style={{marginLeft: 24}}>
                                                    <input type="radio" name="country" value="Outside India" required="required"/>
                                                    <span style={{marginLeft: 8}}>Outside India</span>
                                                </label>
                                            </div>

                                        </div>
                                        <div className="field">
                                            <label className="label">Professional Email</label>
                                            <div className="control has-icons-left has-icons-right">
                                                <input className="input"
                                                       name="email"
                                                       type="email"
                                                       placeholder="Professional Email"
                                                       required
                                                       onChange={(event) => this.setState({email: event.target.value})}
                                                />
                                                <span className="icon is-left">
                                                    <i className="fas fa-envelope"></i>
                                                </span>
                                                <span className={this.emailStyle(this.state.email)}>
                                                    <i className="fas fa-check"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Preferred Username (Optional)</label>
                                            <div className="control has-icons-left has-label">
                                                <input className="input"
                                                       type="username"
                                                       name="username"
                                                       placeholder="login username"/>
                                                <span className="icon is-left">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Phone number (Optional)</label>
                                            <div className="control has-icons-left has-label">
                                                <input className="input"
                                                       name="phone"
                                                       type="tel"
                                                       placeholder="Phone number"
                                                />
                                                <span className="icon is-left">
                                                    <i className="fas fa-phone"></i>
                                                </span>
                                            </div>
                                        </div>
                                        {/*<div>*/}
                                            {/*By signing up, you accept our <a>Terms of Service</a> and <a>Privacy*/}
                                            {/*Policy</a>.*/}
                                        {/*</div>*/}
                                        <br/>
                                        <div className="columns">
                                            <div className="column is-full">
                                                <div className="field">
                                                    <div className="control">
                                                        <input className="button is-primary is-fullwidth" type="submit"
                                                               value={this.getSignupButtonLabel(contactSource)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            }
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </div>
                        <div className="column"/>
                    </div>
                </div>
                <br/>
                < br/>

            </Layout>
        )
    }

    emailStyle(email) {
        console.log(email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
        return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ?
            "icon is-right has-text-success" : "icon is-right";
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({status: "SUCCESS", signeeName: data.get('name'), email: data.get('email')});
            } else {
                this.setState({status: "ERROR", signeeName: data.get('name'), email: data.get('email')});
            }
        };
        xhr.send(data);
    }
}
