import type { SrcMeta } from "../../atomic/image/type"
import YoutubeIcon from "../_image/youtube-icon.png?w=512;1024&format=webp;png;jpg&as=meta"
import InstagramIcon from "../_image/instagram-icon.png?w=512;1024&format=webp;png;jpg&as=meta"
import XIcon from "../_image/x-icon.png?w=512;1024&format=webp;png;jpg&as=meta"
import TiktokIcon from "../_image/tiktok-icon.png?w=512;1024&format=webp;png;jpg&as=meta"

export type SnsImage = {
  srcMeta: SrcMeta;
  alt: string;
};

type Sns = {
  name: string;
  href: string;
  icon: SnsImage;
};

export const SNS: Sns[] = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCK-OUvWo6IQz2W6Z-fH27BQ?sub_confirmation=1",
    icon: {
      srcMeta: YoutubeIcon,
      alt: "YouTubeアイコン",
    },
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/takumi.rg/",
    icon: {
      srcMeta: InstagramIcon,
      alt: "Instagramアイコン",
    },
  },
  {
    name: "X(Twitter)",
    href: "https://twitter.com/TakumiShimizu43",
    icon: {
      srcMeta: XIcon,
      alt: "X（Twitter）アイコン",
    },
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@takumishimizu43?lang=ja-JP",
    icon: {
      srcMeta: TiktokIcon,
      alt: "TikTokアイコン",
    },
  },
]
