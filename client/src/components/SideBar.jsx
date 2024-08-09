import { Drawer } from "vaul";
import { useTranslation } from "react-i18next";
import "../styles/App.css";

function SideBar() {
  const { t } = useTranslation();

  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <i className="btn-menu"><box-icon name='menu' animation='noe' color='#6d6d6d' size='md'></box-icon></i></Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="z-[800] fixed inset-0 bg-black/50" />
        <Drawer.Content className="z-[900] bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
        <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              {/* <Drawer.Title className="text-gray-900 font-medium mb-4 text-center">
                Menu.
              </Drawer.Title> */}
              {/* <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p> */}
            </div>
        </div>
        <nav className="">
            <ul className="active sidebar sidebar-list h-auto relative w-auto text-center p-4 bg-white">
                <li className="list-none p-4 "><a className="text-zinc-600 font-light" href="#home">{t('navbar.home')}</a></li>
                <li className="list-none p-4 "><a className="text-zinc-600 font-light" href="#proyectos">{t('navbar.work')}</a></li>
                <li className="list-none p-4 "><a className="text-zinc-600 font-light" href="#sobreMi">{t('navbar.about')}</a></li>
                <li className="list-none p-4 "><a className="text-zinc-600 font-light" href="#contacto">{t('navbar.contact')}</a></li>
            </ul> 
        </nav>
        <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto ">
            <div className="flex gap-6 justify-end max-w-md mx-auto mr-3">
              <a
                className="text-xs text-zinc-600 flex items-center gap-0.25"
                href={t('basics.profiles.2.url')}
                target="_blank"
              >
                GitHub
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
              <a
                className="text-xs text-zinc-600 flex items-center gap-0.25"
                href={t('basics.profiles.1.url')}
                target="_blank"
              >
                Twitter
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
        </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
export default SideBar;
