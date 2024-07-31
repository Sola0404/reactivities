import { Card, Image, Button } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default function ActivityDetails() {
	const { activityStore } = useStore();
	const {
		selectedActivity: activity,
		openForm,
		cancelSelectActivity,
	} = activityStore;

	if (!activity) return <LoadingComponent />;

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
					<Button
						onClick={() => openForm(activity.id)}
						basic
						content="Edit"
						color="purple"
					/>
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
