namespace $.$$ {

	export class $org_gate_sign extends $.$org_gate_sign {

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

		user() {
			const token = this.token()

			if( !token ) {
				this.$.$mol_fail( new Error('Not signed') )
			}

			return this.domain().user().get( token! )
		}

		up( username: string, password: string ) {
			const user = this.domain().user().get( username )
			if ( user.username() ) {
				return this.$.$mol_fail( new Error( this.error().wrong_name ) )
			}
			return this.domain().user().add( username, password )
		}

		in( username: string, password: string ) {
			const user = this.domain().user().get( username )
			if ( !user.username() ) {
				return this.$.$mol_fail( new Error( this.error().wrong_creds ) )
			}

			if ( password !== user.password() ) {
				return this.$.$mol_fail(new Error( this.error().wrong_creds ))
			}

			this.token( user.id() )
		}

		out() {
			this.token( '' )
		}

	}

}
