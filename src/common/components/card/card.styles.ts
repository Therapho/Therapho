import { mergeStyleSets } from "@fluentui/merge-styles";
import { mergeStyles } from "@fluentui/react";
import { Depths } from "@fluentui/theme";

export const cardStyles = mergeStyleSets({
  card: {
    boxShadow: Depths.depth16,
    padding: 10,
    margin: 10,
    minWidth: 300,
    height: 150,
    position: "relative"
  },
  contentBottomRight : mergeStyles({
    right: 5,
    textAlign: "right", 
    position:"absolute",
    bottom:5
  })
});
