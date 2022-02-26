namespace $.$$ {

	export class $org_gate extends $.$org_gate {

		@ $mol_mem
		user() {
			return this.domain().sign().user()
		}

		signed() {
			return !!this.domain().sign().token()
		}

		sign_out() {
			this.domain().sign().out()
		}

		page_param( next?: string ) {
			return this.$.$mol_state_arg.value( this.param() , next )
		}

		page() {
			let val = this.page_param()

			if ( this.signed() && val !== 'user' ) {
				val = this.page_param( 'user' )
			} else if ( !this.signed() && val !== 'sign_up' ) {
				val = this.page_param( 'sign_in' )
			}

			switch( val ) {
				case "user": return this.User_page()
				case "sign_up": return this.Sign_up_page()
				default: return this.Sign_in_page()
			}

		}

		@ $mol_mem
		store_pull() {
			console.log('store_pull')
			const list = this.domain().user().list()
			for ( const user of list ) {
				user.username()
			}
		}

		auto() {
			this.store_pull()
		}

	}

}
