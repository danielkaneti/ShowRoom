import React, { useState, useEffect } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import { subscribeToChat, sendMessageOnChat } from '../socket';
import { useDispatch, useSelector } from 'react-redux';

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #F1F1F1;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid black;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid black;
  outline: none;
  color: black;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  background-color: black;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: white;
  font-size: 17px;
`;

const Form = styled.form`
  width: 400px;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: black;
  color: white;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: black;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;


const Chat = () => {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState('');

  const user = useSelector(state => state.user.user);

  function sendMessage(e) {
    e.preventDefault();

    sendMessageOnChat(user, message);

    setMessage("");
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  useEffect(() => {
    subscribeToChat(user, (message) => {
      setChat(oldChats => [...oldChats, message]);
    });
  }, []);

  return (
    <Page>
      <Container>
        {chat.map((message, index) => {
          // if (message.id === yourID) {
          //   return (
          //     <MyRow key={index}>
          //       <MyMessage>
          //         {message.body}
          //       </MyMessage>
          //     </MyRow>
          //   )
          // }
          return (
            <PartnerRow key={index}>
              <PartnerMessage>
                {message.user.username} : 
                {message.message}
              </PartnerMessage>
            </PartnerRow>
          )
        })}
      </Container>
      <Form onSubmit={sendMessage}>
        <TextArea value={message.message} onChange={handleChange} placeholder="Say something..." value={message} />
        
        <Button>Send</Button>
      </Form>
    </Page>
  );
};

export default Chat;