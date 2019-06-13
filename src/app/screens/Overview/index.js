import {compose, mapProps} from "recompose";
import Overview from "./Overview";

const decorate = compose(
  mapProps(({ player }: Player) => {
    return {
      stats: {
        solo: player.stats.p2,
        duo: player.stats.p10,
        squad: player.stats.p9
      },
      recentMatches: player.recentMatches
    }
  })
)

export default decorate(Overview)