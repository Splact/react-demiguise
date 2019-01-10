import * as React from 'react';
import styled from 'styled-components';


interface ContainerProps {
  hidden: boolean,
  onTransitionEnd: Function,
  style: any,
  className?: string,
}
const Container = styled('div')<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  transition: opacity 1.5s ease-in;
  opacity: ${props => props.hidden ? 0 : 1};
`;

export interface Props {
  className?: string
  delay: number | [number],
  loop: boolean,
  messages: [string],
  onLoopEnd: Function,
  style: any,
}

export interface State {
  currentMessage?: string | null,
  nextMessage?: string | null,
  isMessageHidden: boolean,
}


export default class Demiguise extends React.Component<Props, State> {
  static defaultProps = {
    delay: 3000,
    loop: false,
    messages: [],
  };

  state = {
    currentMessage: null,
    nextMessage: null,
    isMessageHidden: true,
  };

  messageIndex: number;

  /* React Lifecycle */
  componentDidMount() {
    const { messages } = this.props;

    if (messages.length > 0) {
      this.messageIndex = -1;
      this.setNextMessage();
    }
  }

  /* Internal Methods */
  setNextMessage = () => {
    const { currentMessage } = this.state;
    const { messages, loop, onLoopEnd } = this.props;

    this.messageIndex = this.messageIndex + 1;

    if (this.messageIndex === messages.length) {
      // the last message of the array is currently shown
      if (onLoopEnd) {
        onLoopEnd();
      }

      this.messageIndex = loop ? 0 : -1;
    }

    if (this.messageIndex >= 0) {
      if (!!currentMessage) {
        this.setState({
          nextMessage: messages[this.messageIndex],
          isMessageHidden: true,
        });
      } else {
        setTimeout(() => {
          this.setState({
            currentMessage: messages[this.messageIndex],
            isMessageHidden: false,
          });
        }, 200);
      }
    }
  }
  transitionEndHandler = () => {
    const { delay } = this.props;
    const { isMessageHidden, nextMessage } = this.state;

    // if message is now hidden
    if (isMessageHidden) {
      // we can swap text and show
      this.setState({
        currentMessage: nextMessage,
        nextMessage: null,
        isMessageHidden: false,
      });
    } else {
      // we can set next message
      let messageDelay = delay || 3000;
      if (Array.isArray(delay)) {
        messageDelay = delay.length > this.messageIndex
          ? delay[this.messageIndex]
          : delay[delay.length - 1];
      }
      setTimeout(this.setNextMessage, messageDelay);
    }
  }

  render() {
    const { className, style } = this.props;
    const { currentMessage, isMessageHidden } = this.state;

    return (
      <Container
        hidden={ isMessageHidden }
        onTransitionEnd={ this.transitionEndHandler }
        style={ style }
        className={ className }
      >
        { currentMessage }
      </Container>
    );
  }
}
