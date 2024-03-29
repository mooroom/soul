import React from "react";
import styled from "styled-components";
import shapes from "../img/shapes.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const AccountSetup = ({ nextStep }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <Container>
      <img src={shapes} width="236" />
    </Container>
  );
};

export default AccountSetup;

// export class AccountSetup extends Component {
//     continue = e => {
//         e.preventDefault();
//         this.props.nextStep();
//     };

//     render() {
//         const { values, inputChange } = this.props;

//         return (
//             <div className="form-container">
//                 <h1 className="mb-5">Account Setup</h1>
//                 <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="phone">Phone Number</label>
//                     <input type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" className="form-control" name="password" onChange={inputChange('password')} value={values.password} />
//                 </div>

//                 <br />

//                 <div className="text-right">
//                     <button className="btn btn-primary" onClick={this.continue}>Continue</button>
//                 </div>
//             </div>
//         )
//     }
// }
