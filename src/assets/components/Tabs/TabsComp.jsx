import { Button, Card, Checkbox, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";

const TabsComp = () => {
  const tabListNoTitle = [
    {
      key: "article",
      label: "article",
    },
    {
      key: "app",
      label: "app",
    },
    {
      key: "project",
      label: "project",
    },
  ];
  const contentListNoTitle = {
    article:  <Form className="grid grid-cols-3 grid-rows-6 gap-2">
            <Form.Item label="Customer Code">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Customer Name">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Address 1 ">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Address 2">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Address 3">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="City">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="ST/Prov">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Zip/Postal">
              <InputNumber min={1} max={10} defaultValue={3} />
            </Form.Item>
            <Form.Item label="Country">
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Phone">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Fax">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Email">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Website">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Terms">
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Form.Item>{" "}
            <Form.Item label="Source">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Company">
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Form.Item>{" "}
            <Form.Item label="Create Date">
              <DatePicker />
            </Form.Item>{" "}
            <Form.Item>
              <Checkbox>Pre-Pay</Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox>Active</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" danger>
                Report
              </Button>
            </Form.Item>
          </Form>,
    app:  <Form className="grid grid-cols-3 grid-rows-6 gap-2">
            <Form.Item label="Customer Code">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Customer Name">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Address 1 ">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Address 2">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Address 3">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="City">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="ST/Prov">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Zip/Postal">
              <InputNumber min={1} max={10} defaultValue={3} />
            </Form.Item>
            <Form.Item label="Country">
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Phone">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Fax">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Email">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Website">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Terms">
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Form.Item>{" "}
            <Form.Item label="Source">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Company">
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Form.Item>{" "}
            <Form.Item label="Create Date">
              <DatePicker />
            </Form.Item>{" "}
            <Form.Item>
              <Checkbox>Pre-Pay</Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox>Active</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" danger>
                Report
              </Button>
            </Form.Item>
          </Form>,
    project:  <Form className="grid grid-cols-3 grid-rows-6 gap-2">
            <Form.Item label="Customer Code">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Customer Name">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Address 1 ">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Address 2">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Address 3">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="City">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="ST/Prov">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Zip/Postal">
              <InputNumber min={1} max={10} defaultValue={3} />
            </Form.Item>
            <Form.Item label="Country">
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Phone">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Fax">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Email">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Website">
              <Input placeholder="input placeholder" />
            </Form.Item>{" "}
            <Form.Item label="Terms">
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Form.Item>{" "}
            <Form.Item label="Source">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Company">
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Form.Item>{" "}
            <Form.Item label="Create Date">
              <DatePicker />
            </Form.Item>{" "}
            <Form.Item>
              <Checkbox>Pre-Pay</Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox>Active</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" danger>
                Report
              </Button>
            </Form.Item>
          </Form>,
  };

  const [activeTabKey2, setActiveTabKey2] = useState("app");

  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
  return (
    <Card
      style={{
        width: "100%",
      }}
      tabList={tabListNoTitle}
      activeTabKey={activeTabKey2}
      onTabChange={onTab2Change}
      tabProps={{
        size: "middle",
      }}
    >
      {contentListNoTitle[activeTabKey2]}
    </Card>
  );
};
export default TabsComp;
