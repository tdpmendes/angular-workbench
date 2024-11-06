import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-control',
  templateUrl: './language-control.component.html',
  styleUrl: './language-control.component.css'
})
export class LanguageControlComponent implements OnInit {
  siteLanguage = 'English';
  currentLanguage = "en";
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
  ];
  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event:LangChangeEvent) =>{
      console.log('onLangChange',event);
    })
  }
  
  constructor(private translate: TranslateService) { }
  
  changeSiteLanguage(localeCode: string): void {
    
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
    }
    this.currentLanguage = this.translate.currentLang;
  }
}
