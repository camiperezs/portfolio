import SegmentedControl from '../components/ui/SegmentedControl'
import ThemeSelector from '../components/ui/ThemeSelector'
import { languages, useLanguage } from '../context/LanguageContext'
import { themePreferences, useTheme } from '../context/ThemeContext'
import { menuCursor, themeIcons } from '../data/navigation'

export default function SiteControls() {
  const { language, texts, changeLanguage } = useLanguage()
  const { preference, changePreference } = useTheme()

  return (
    <>
      <SegmentedControl
        label={texts.language}
        options={languages.map((id) => ({ id, text: id.toUpperCase() }))}
        current={language}
        onChange={changeLanguage}
      />
      <ThemeSelector
        label={texts.theme.label}
        cursor={menuCursor}
        options={themePreferences.map((id) => ({ id, text: texts.theme[id], icon: themeIcons[id] }))}
        current={preference}
        onChange={changePreference}
      />
    </>
  )
}
