import React from 'react';
import { Container, InputGroup, FormControl, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class BecomeAnAffiliate extends React.Component {
  state = {
    mail: ""
  }

  componentDidMount(){
    window.document.title = "EBU INVEST | Become an Affiliate"
  }

  submit = (e) => {
  }

  render(){
    return(
      <Container style={{marginTop: 20}}>
        <Image src="/tgeyes.png" fluid={true} style={{borderRadius: 5}} />
        <br /><br />
        <div className="card">
          <div className="card-body">
            <h3><b>Become an Affiliate</b></h3>
            We're still working on affiliate system. Maybe come later? Thanks for interest.<br /><br />
            <span onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
          </div>
        </div>
        <br /><br />
      </Container>
    )
  }
}


// <br />
// <br />
// <InputGroup style={{width: '50%'}} size="md" className="mb-3">
//   <FormControl aria-label="Small" value={this.state.mail} onChange={(e) => this.setState({mail: e.currentTarget.value})} aria-describedby="inputGroup-sizing-sm" />
//   <InputGroup.Prepend>
//     <InputGroup.Text id="inputGroup-sizing-sm" onClick={this.submit}>Send</InputGroup.Text>
//   </InputGroup.Prepend>
// </InputGroup>
