import Avatar from '.'

const avatarUrls = [
  { url: 'https://avatars.githubusercontent.com/u/56946732' },
  { url: 'https://avatars.githubusercontent.com/u/499550' },
  { url: 'https://avatars.githubusercontent.com/u/11247099' },
  { url: 'https://avatars.githubusercontent.com/u/810438' },
]

const AvatarDemo = () => (
  <div className="flex flex-col gap-4">
    <Avatar numPeople={10} avatarUrls={avatarUrls} />
    <div>
      <div className="mb-2 text-sm text-gray-500">Avatar highlight on hover: </div>
      <Avatar isHoverable numPeople={10} avatarUrls={avatarUrls} />
    </div>
    <div>
      <div className="mb-2 text-sm text-gray-500">Avatar with tooltip: </div>
      <Avatar
        numPeople={10}
        avatarUrls={avatarUrls.map((item, index) => ({
          url: item.url,
          tooltip: `Avatar ${index}`,
        }))}
      />
    </div>
    <div>
      <div className="mb-2 text-sm text-gray-500">Avatar with clickable: </div>
      <Avatar
        isHoverable
        numPeople={10}
        avatarUrls={avatarUrls.map((item, index) => ({
          url: item.url,
          onClick: () => alert(`Avatar ${index + 1} clicked`),
        }))}
      />
    </div>
  </div>
)

export default AvatarDemo
