import discord from "../assets/images/webp/discord.webp";
import playStore from "../assets/images/webp/google-play.webp";
import appStore from "../assets/images/webp/app-store.webp";
import {
  ABout_PATH_LINK,
  AI_UGC_PATH_LINK,
  APPSTORE_LINK,
  DISCORD_LINK,
  MARKETPLACE_PATH_LINK,
  MORE_PATH_LINK,
  PLAYSTORE_LINK,
} from "./constant";
// navbar data
export const NAV_DATA = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "About",
    path: ABout_PATH_LINK,
  },
  {
    link: "AI-UGC",
    path: AI_UGC_PATH_LINK,
  },
  {
    link: "Marketplace",
    path: MARKETPLACE_PATH_LINK,
  },
  {
    link: "More",
    path: MORE_PATH_LINK,
  },
];
export const SOCIAL_LINKS = [
  {
    icons: discord,
    path: DISCORD_LINK,
  },
  {
    icons: appStore,
    path: APPSTORE_LINK,
  },
  {
    icons: playStore,
    path: PLAYSTORE_LINK,
  },
];

export const EXPLORE_DATA_LISTS = [
  "Play with your own cute & adorable girls whose in charge of saving NANOSPACE world.",
  "Characters are fully customizable with various costumes, attractive gears and powerful weapons.",
];
