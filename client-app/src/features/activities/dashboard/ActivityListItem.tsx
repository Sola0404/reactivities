import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import ActivityListItemAttendee from "./ActivityListItemAttendee";

interface Props {
	activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
	return (
		<Segment.Group>
			<Segment>
				{activity.isCancelled && (
					<Label
						attached="top"
						color="grey"
						content="Cancelled"
						style={{ textAlign: "center" }}
					/>
				)}
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
							<Item.Description>
								Hosted by {activity.host?.displayName}
							</Item.Description>
							{activity.isHost && (
								<Item.Description>
									<Label basic color="pink">
										You are hosting this activity
									</Label>
								</Item.Description>
							)}
							{activity.isGoing && !activity.isHost && (
								<Item.Description>
									<Label basic color="purple">
										You are going to this activity
									</Label>
								</Item.Description>
							)}
						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>
			<Segment>
				<span>
					<Icon name="clock" />
					{format(activity.date!, "dd MMM yyyy h:mm aa")}
					<Icon name="marker" />
					{activity.venue}
				</span>
			</Segment>
			<Segment secondary>
				<ActivityListItemAttendee attendees={activity.attendees!} />
			</Segment>
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
