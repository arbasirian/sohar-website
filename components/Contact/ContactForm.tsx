import { Button, Form, Input } from "antd";
import { Box, Flex } from "components";
import React from "react";

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Flex>
        <TextArea name="message" placeholder="Message" rows={6} />
      </Flex>
      <Flex
        justifyContent="space-between"
        flexGap="50px"
        alignItems="flex-start"
        marginBottom="40px"
      >
        <Box>
          <Input name="first_name" placeholder="First Name" />
          <Input name="last_name" placeholder="Last Name" />
          <Input name="email" type="email" placeholder="Email" />
        </Box>
        <Box>
          <Input name="company" placeholder="Company" />
          <Input name="country" placeholder="Country" />
        </Box>
      </Flex>
      <Button className="submit-form">Send your request</Button>
    </Form>
  );
};

export default ContactForm;
