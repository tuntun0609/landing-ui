import { docsConfig } from '@/config/docs'

import { MenuItem } from './menu-item'

const MenuHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-1 px-2 py-1 text-sm font-bold">{children}</div>
)

const Sidebar = () => (
  <aside className="">
    {docsConfig.map(item => (
      <div key={item.title} className="mb-4">
        <MenuHeader>{item.title}</MenuHeader>
        {item.items?.map(subItem => (
          <MenuItem key={subItem.title} href={subItem.href}>
            {subItem.title}
          </MenuItem>
        ))}
      </div>
    ))}
  </aside>
)

export default Sidebar
