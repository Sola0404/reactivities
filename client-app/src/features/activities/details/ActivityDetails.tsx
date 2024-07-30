import { Card, Image, Button } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
	activity: Activity;
	cancelSelectActivity: () => void;
}

export default function ActivityDetails({
	activity,
	cancelSelectActivity,
}: Props) {
	return (
		<Card fluid>
			<Image src={`/assets/categoryImages/${activity.category}.jpg`} />
			<Card.Content>
				<Card.Header>{activity.title}</Card.Header>
				<Card.Meta>
					<span>{activity.date}</span>
				</Card.Meta>
				<Card.Description>{activity.description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button.Group widths="2">
					<Button basic content="Edit" color="purple" />
					<Button
						onClick={cancelSelectActivity}
						basic
						content="Cancel"
						color="grey"
					/>
				</Button.Group>
			</Card.Content>
		</Card>
	);
}
