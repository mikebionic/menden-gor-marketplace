import { Steps } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const { Step } = Steps;

export const RegisterSteps = ({stage}:any) => (
	<Steps>
		<Step
			status={ stage === 1 ? "process" : "finish" }
			title="Choose Method"
			icon={<UserOutlined className="text-textColorOrange" />}
		/>
		<Step
			status={ stage < 2 ? "wait" : stage === 2 ? "process" : "finish" }
			title="Verification"
			icon={<SolutionOutlined className="text-textColorOrange" />}
		/>
		<Step
			status={ stage < 3 ? "wait" : stage === 3 ? "process" : "finish" }
			title="Fill the blank"
			icon={<FileTextOutlined className="text-textColorOrange" />}
		/>
	</Steps>
)