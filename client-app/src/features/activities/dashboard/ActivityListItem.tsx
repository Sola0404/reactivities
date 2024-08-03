import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";
import { SyntheticEvent, useState } from "react";

interface Props {
	activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
	const { activityStore } = useStore();
	const { deleteActivity, loading } = activityStore;

	const [target, setTarget] = useState("");

	function handleActivityDelete(
		e: SyntheticEvent<HTMLButtonElement>,
		id: string
	) {
		setTarget(e.currentTarget.name);
		deleteActivity(id);
	}

	return (
		<Segment.Group>
			<Segment>
				<Item.Group>
					<Item>
						<Item.Image size="tiny" circular src="/assets/user.png" />
						<Item.Content>
							<Item.Header
								as={Link}
								to={`/activities/${activity.id}`}
								className="activity-header"
							>
								{activity.title}
							</Item.Header>
							<Item.Description>Hosted by Sola</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>
			<Segment>
				<span>
					<Icon name="clock" />
					{activity.date}
					<Icon name="marker" />
					{activity.venue}
				</span>
			</Segment>
			<Segment secondary>Attendees go here</Segment>
			<Segment clearing>
				<span>{activity.description}</span>
				<Button
					as={Link}
					to={`/activities/${activity.id}`}
					floated="right"
					content="View"
					className="activity-btn"
				/>
			</Segment>
		</Segment.Group>
	);
}
