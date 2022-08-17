import React, { useState } from 'react'
import { Button, Row, Space } from 'antd'
import mineavatar from './mineavatar.jpeg'
import styles from './App.module.css'

const App = () => {
  const Greetings = ['Hello', '你好', 'Bonjour', 'Bon不jour了']
  const [index, setIndex] = useState(0)
  return (
    <Row justify='center'>
      <Space direction='vertical' align='center'>
        <h1 className={styles['title']}>
          Luo3House, {Greetings[index % Greetings.length]}
        </h1>
        <img src={mineavatar} />
        <br />
        <Button onClick={() => setIndex(index + 1)}>Greeting</Button>
      </Space>
    </Row>
  )
}

export default App
