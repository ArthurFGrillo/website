import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

type Options = {
  src: string
  alt?: string
}

export default ((opts: Options) => {
  const ProfileImage: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={classNames(displayClass)}>
        <img class="profile-image"
          src={opts.src}
          alt={opts.alt ?? ""}
        />
      </div>
    )
  }

  return ProfileImage
}) satisfies QuartzComponentConstructor<Options>
