import { Form, Input, Button } from 'antd'
import Link from 'next/link'

const AddComment = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <h3>Add Comment</h3>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input your fullname!',
            },
          ]}
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
        >
          <Input placeholder="Full Name" size="large" className="input" />
        </Form.Item>
        <Form.Item
          name="comment"
          rules={[
            {
              required: true,
              message: 'Please input your comment!',
            },
          ]}
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
        >
          <Input placeholder="Comment" size="large" className="input" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            className="button"
          >
            Post
          </Button>
        </Form.Item>
        <div className="flex-row sign-in-text-style">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Already have an account ?
          <Link href="/sign-in">
            <p className="theme-primary-color">Sign In</p>
          </Link>
        </div>
      </Form>
    </>
  )
}

export default AddComment