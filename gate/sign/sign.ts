namespace $ {

	export class $org_gate_sign extends $mol_object2 {

		domain(): $org_gate_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_gate_sign' )
		}

		@ $mol_mem
		token( next?: string ) {
			return this.$.$mol_state_local.value( 'org_gate_sign_token' , next )
		}

		session( token: string , id?: string ) {
			return String(this.state().sub( token ).value( id ) ?? '')
		}

		in( user: $org_gate_user ) {
			const token = this.token( $mol_guid() )!
			this.session( token , user.id() )
		}

		out() {
			const token = this.token()

			if ( token ) {
				this.session( token , '' )
				this.token( '' )
			}
		}

		user() {
			const token = this.token()

			if( !token ) {
				this.$.$mol_fail( new Error('Not signed') )
			}

			const id = this.session( token! )
			return this.domain().user().get( id )
		}

	}

}
