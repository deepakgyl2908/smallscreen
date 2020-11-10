import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';


class Header extends React.Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            isSrolled: false
        })
    }

    componentDidMount = () => {
        let _slf = this;
        window.addEventListener('scroll', function (e) {
            if (window.scrollY <= 100) {
                _slf.setState({
                    isSrolled: false
                })
            } else {
                _slf.setState({
                    isSrolled: true
                })
            }
        });
    }

    render() {
        const { isOpen } = this.state;
        const { pagetype } = this.props;
        return (
            <Navbar expand="md" fixed="top" className={`${this.state.isSrolled || pagetype == "inner" ? "bg-white" : ""}`}>
                <NavbarBrand href="/">
                    <img src="/img/logo.png" className="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/work">Work</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/teams">Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/clients">Clients</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/awards">Awards</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header;