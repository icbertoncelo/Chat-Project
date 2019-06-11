import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MessageActions } from '~/store/ducks/message';

import {
  Container, ChatScreen, TextArea, Message,
} from './styles';

class Chat extends Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
    loadMessageRequest: PropTypes.func.isRequired,
    message: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.number,
          message: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  state = {
    message: '',
  };

  componentDidMount() {
    const { loadMessageRequest } = this.props;

    loadMessageRequest();
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { message } = this.state;
    const { addMessage } = this.props;

    if (message) {
      addMessage(message);
    }

    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;
    const { message: allMessages } = this.props;

    return (
      <Container>
        <ChatScreen>
          {allMessages.data.map(msgObject => (
            <Message key={msgObject._id}>
              <p>{msgObject.message}</p>
            </Message>
          ))}
        </ChatScreen>

        <TextArea>
          <textarea
            placeholder="Type your message here"
            name="message"
            value={message}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.onSubmit}>
            Enviar
          </button>
        </TextArea>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
});

const mapDispatchToProps = dispatch => bindActionCreators(MessageActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
