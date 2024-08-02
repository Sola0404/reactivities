import { Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";

export default observer(function ActivityList() {
	const { activityStore } = useStore();
	const { activitiesBydate } = activityStore;

	return (
		<Segment>
			<Item.Group divided>
				{activitiesBydate.map((activity) => (
					<ActivityListItem key={activity.id} activity={activity} />
				))}
			</Item.Group>
		</Segment>
	);
});
