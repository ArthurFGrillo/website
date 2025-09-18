import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const ProfileImage: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={classNames(displayClass)}>
        <img class="profile-image"
          src="../static/images/me.jpg"
          alt="Profile Image"
        />
      </div>
    )
  }

  return ProfileImage
}) satisfies QuartzComponentConstructor
