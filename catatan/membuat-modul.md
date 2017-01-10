Membuat Modul

* ng generate module nama-modul

        ng generate module transfer

* Pindah ke folder transfer 

        cd src/app/transfer

* Buat komponen dalam modul tersebut

        ng generate component input-transfer
        ng generate component konfirmasi-transfer

* Daftarkan route untuk masing-masing komponen

        @NgModule({
            imports: [ RouterModule.forChild(masukkanRoutingDisini) ]
        })

* Import modul di `app.module`

        import { TransferModule } from './transfer/transfer.module';

* Daftarkan routing untuk modul transfer

        { path: 'transfer', redirectTo: '/transfer', pathMatch: 'full' }