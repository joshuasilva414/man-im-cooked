import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>text transcription</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            A translation moves every point of a graph the same distance in the same direction. When shifting a graph horizontally, you replace x with x minus a constant, and when shifting vertically, you add a constant to the entire function. A reflection flips the graph about a specific axis. Reflecting a function in the x-axis multiplies the function's output by negative one, while reflecting in the y-axis replaces x with its negative in the function. A vertical stretch or compression multiplies the function's output by a constant factor, which makes the graph taller or flatter without affecting its horizontal position. A horizontal stretch or compression replaces x with a scaled version of itself inside the function, effectively spreading or compressing the graph along the x-axis. When multiple transformations occur together, their order can affect the final appearance of the graph, but each transformation still follows these basic rules of shifting, flipping, and scaling.








            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
