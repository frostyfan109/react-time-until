import React, { Fragment, useMemo, useState } from 'react'
import {
  Layout, Typography, InputNumber, Space,
  Radio, Divider, Descriptions , Switch, Input,
  notification, DatePicker
} from 'antd'
import moment, { Moment } from 'moment'
import { useDebounce } from 'use-debounce'
import { TimeUntil, useTimeUntil } from 'react-time-until'
import 'antd/dist/antd.css'

const { Title, Text } = Typography
const { Content, Sider } = Layout

const App = () => {
  const [_delta, setDelta] = useState<number>(60000)
  const [_date, setDate] = useState<Moment | null>(moment())
  const [dataType, setDataType] = useState<"delta"|"date">("delta")
  const [_updateInterval, setUpdateInterval] = useState<number>(50)
  const [format, setFormat] = useState<"text" | "time">("text")
  const [ago, setAgo] = useState<boolean>(true)
  const [inText, setInText] = useState<string>("in ")
  const [agoText, setAgoText] = useState<string>(" ago")
  const [countdown, setCountdown] = useState<boolean>(false)
  const [finishText, setFinishText] = useState<string>("Countdown complete")

  const date = useMemo(() => _date ? _date.toDate() : new Date(), [_date])
  const [delta] = useDebounce(_delta, 500)
  const [updateInterval] = useDebounce(_updateInterval, 500)

  const timeUntilProps = {
    format,
    ago,
    inText,
    agoText,
    finishText,
    countdown,
    onFinish: () => notification.info({
      message: "Countdown complete"
    })
  }
  const timeUntilHookProps = useMemo(() => ({
    ...(dataType === "delta" ? {
      delta
    } : {
      date
    }),
    countdown,
    interval: updateInterval,
  }), [dataType, delta, date, countdown, updateInterval])

  const controlledValue = useTimeUntil(timeUntilHookProps)
  const { delta: currentDelta, hours, minutes, seconds, finished } = controlledValue


  return (
    <Layout>
      <Sider width={ 300 } style={{ background: "#fff", padding: 32, borderRight: "1px solid #ccc" }}>
        <Space size="large" direction="vertical" style={{ width: "100%" }}>
          {/* <Card title="My countdown!" style={{ minWidth: 750 }}> */}
            <Space size="large" direction="vertical" style={{ width: "100%" }}>
              <Title level={ 5 }>General settings</Title>
              <Space size="middle" direction="vertical">
                <Space size="small" direction="vertical">
                  { dataType === "delta" ? (
                    <Fragment>
                      Delta:
                      <InputNumber value={ _delta } onChange={ setDelta } style={{ width: "100%" }} />
                    </Fragment>
                  ) : (
                    <Fragment>
                      Date:
                      <DatePicker value={ _date } onChange={ setDate } showTime={ true } />
                    </Fragment>
                  ) }
                </Space>
                <Radio.Group
                  size="small"
                  options={[
                    { label: "Delta", value: "delta" },
                    { label: "Date", value: "date" }
                  ]}
                  value={ dataType }
                  onChange={ ({ target: { value } }) => setDataType(value)  }
                  optionType="button"
                  style={{ width: "100%", display: "flex" }}
                />
              </Space>
              <Space size="small" direction="vertical">
                Update interval:
                <InputNumber value={ _updateInterval } onChange={ setUpdateInterval } style={{ width: "100%" }} />
              </Space>
              <Space size="middle" direction="vertical">
                <Space size="middle">
                  In/ago:
                  <Switch checked={ ago } onChange={ setAgo } />
                </Space>
                <Space>
                  <Space size="small" direction="vertical">
                    <Text disabled={ !ago }>"In" text:</Text>
                    <Input value={ inText } onChange={ ({ target: { value } }) => setInText(value) } disabled={ !ago } />
                  </Space>
                  <Space size="small" direction="vertical">
                    <Text disabled={ !ago }>"Ago" text:</Text>
                    <Input value={ agoText } onChange={ ({ target: { value } }) => setAgoText(value) } disabled={ !ago } />
                  </Space>
                </Space>
              </Space>
              <Space size="small" direction="vertical">
                Format:
                <Radio.Group
                  options={[
                    { label: "Text", value: "text" },
                    { label: "Time string", value: "time" }
                  ]}
                  value={ format }
                  onChange={ ({ target: { value } }) => setFormat(value)  }
                  optionType="button"
                  style={{ width: "100%" }}
                />
              </Space>
              <Divider style={{ margin: 4 }} />
              <Title level={ 5 }>Countdown settings</Title>
              <Space size="middle">
                Countdown:
                <Switch checked={ countdown } onChange={ setCountdown } />
              </Space>
              <Space size="small" direction="vertical">
                <Text disabled={ !countdown }>Finish text:</Text>
                <Input value={ finishText } onChange={ ({ target: { value } }) => setFinishText(value) } disabled={ !countdown } />
              </Space>
            </Space>
          </Space>
        </Sider>
        <Content style={{ padding: 32 }}>
        <Space size="large" direction="vertical" style={{ width: "100%" }}>
          <Space size="middle" direction="vertical">
            <div className="ant-statistic">
                <div className="ant-statistic-title">
                  Countdown (uncontrolled)
                </div>
                <div className="ant-statistic-content">
                  <span className="ant-statistic-content-value">
                    <TimeUntil { ...timeUntilProps } { ...timeUntilHookProps } />
                  </span>
                </div>
              </div>
              <div className="ant-statistic">
                <div className="ant-statistic-title">
                  Countdown (controlled using hook)
                </div>
                <div className="ant-statistic-content">
                  <span className="ant-statistic-content-value">
                    {/* You can use the delta useTimeUntil to use the component with the hook. */}
                    <TimeUntil { ...timeUntilProps } { ...timeUntilHookProps } value={ controlledValue } onFinish={ undefined } />
                  </span>
                </div>
              </div>
              <div className="ant-statistic">
                <div className="ant-statistic-title">
                  Current delta
                </div>
                <div className="ant-statistic-content">
                  <span className="ant-statistic-content-value">
                    { currentDelta }
                  </span>
                  <span className="ant-statistic-content-suffix">ms</span>
                </div>
              </div>
            </Space>
            <Descriptions bordered={ true } style={{ background: "#fff", width: "100%" }}>
              {/* <Descriptions.Item label="Current delta" span={ 3 }>{ currentDelta }</Descriptions.Item> */}
              <Descriptions.Item label="Hours">{ hours }</Descriptions.Item>
              <Descriptions.Item label="Minutes">{ minutes }</Descriptions.Item>
              <Descriptions.Item label="Seconds">{ seconds }</Descriptions.Item>
              <Descriptions.Item label="Finished">{ JSON.stringify(finished) }</Descriptions.Item>
            </Descriptions>
        </Space>
      </Content>
    </Layout>
  )
}

export default App