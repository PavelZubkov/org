namespace $.$$ {

	export class $org_gate extends $.$org_gate {

		@ $mol_mem
		user() {
			return this.domain().sign().user()
		}

		@ $mol_mem
		signed() {
			return !!this.domain().sign().token()
		}

		sign_out() {
			this.domain().sign().out()
		}

		pages() {
			if ( this.signed() ) {
				return [
					this.Menu(),
					this.User(),
				]
			}

			return super.pages()
		}

		Links() {
			if ( this.signed() ) {
				return this.Sign_out_menu()
			}

			return super.Links()
		}


		@ $mol_mem
		store_pull() {
			console.log('store_pull')
			const list = this.domain().user().list()
			for ( const user of list ) {
				user.name()
			}
		}

		auto() {
			this.store_pull()
		}

	}

}
