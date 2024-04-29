import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
} from "antd";
import { useNavigate } from "react-router-dom";
const CRMNewCustomer = (props) => {
  const Navigate = useNavigate();
  return (
    <>
      <Space direction="vertical" size={16}>
        <Card
          size="default"
          extra={
            <div className="flex items-center gap-2">
              <Button
                type="primary"
                onClick={() => {
                  props.setCategory("/");
                  Navigate("/");
                }}
                style={{ backgroundColor: "#4ADE80" }}
              >
                Save
              </Button>
              <Button
                type="default"
                onClick={() => {
                  props.setCategory("/");
                  Navigate("/");
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  props.setCategory("/");
                  Navigate("/");
                }}
                type="primary"
              >
                Save & Close
              </Button>
            </div>
          }
          title="Customer"
          style={{ margin: "10px" }}
        >
          <Form className="grid grid-cols-3 grid-rows-6 gap-2">
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
          </Form>
        </Card>
      </Space>
    </>
  );
};
export default CRMNewCustomer;
