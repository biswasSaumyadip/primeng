import { TemplateSeparatorModule } from '@/components/template/templateseparator';
import { AppConfigService } from '@/service/appconfigservice';
import { Component, inject } from '@angular/core';

@Component({
    standalone: true,
    selector: 'atlantis-separator',
    imports: [TemplateSeparatorModule],
    template: `
        <template-separator>
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.736 16.7144C18.5426 24.1391 29.4206 24.1338 30.2244 16.7144C27.4389 16.4579 25.0833 14.6946 23.9802 12.25C22.8772 14.6946 20.5216 16.4579 17.736 16.7144ZM23.2804 23.6609C23.0374 26.3486 20.8981 28.6944 18.2461 29.186C14.6619 29.9314 11.1098 27.2517 10.792 23.6609C13.5776 23.4044 15.9332 21.6411 17.0362 19.1965C18.1312 21.6598 20.591 23.4338 23.2804 23.6609ZM30.2244 30.6073C29.904 33.7706 27.2252 36.25 23.9802 36.25C20.7353 36.25 18.0565 33.7706 17.736 30.6073C20.4255 30.3802 22.8852 28.6062 23.9802 26.1429C25.0752 28.6062 27.535 30.3802 30.2244 30.6073ZM37.1683 23.6609C36.8478 27.0219 33.7737 29.6108 30.3525 29.2768C27.436 29.0551 24.9362 26.5757 24.6798 23.6609C27.3693 23.4338 29.829 21.6598 30.924 19.1965C32.0271 21.6411 34.3827 23.4044 37.1683 23.6609Z"
                    [attr.fill]="fillColor"
                />
            </svg>
        </template-separator>
    `
})
export class AtlantisSeparator {
    configService = inject(AppConfigService);

    get fillColor() {
        return this.configService.appState().darkTheme ? 'var(--p-surface-0)' : 'var(--p-surface-900)';
    }
}
