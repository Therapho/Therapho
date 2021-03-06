import { Label, Link } from "@fluentui/react"
import Card from "../../../common/components/card/card"
import { cardStyles } from "../../../common/components/card/card.styles";
import { useAccount } from "../../../common/stores/account/queries/useAccount";
import { useTaskWeek } from "../../../common/stores/task/queries";
import dateUtilities from "../../../common/utilities/dateUtilities";

const BalanceCard = () =>{

    const thisWeek = dateUtilities.getMonday(new Date());
    const { data: account } = useAccount();
    const { data: taskWeek } = useTaskWeek(thisWeek);

    return(
      <Card>
        <Label>Balance</Label>
        <p>Current: {account?.balance?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</p>
        <p>Pending: {taskWeek?.value?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</p>
          <Link className={cardStyles.contentBottomRight}>More...</Link>
      </Card>
    )
}

export default BalanceCard;