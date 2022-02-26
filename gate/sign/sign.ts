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

		session( token: string , id?: string ) {
			return String(this.state().sub( token ).value( id ) ?? '')
		}

		up( name: string, password: string ) {
			if ( this.domain().user().check_exists( name ) ) {
				return this.$.$mol_fail(new Error( this.error().wrong_name ))
			}

			return this.domain().user().create( name, password )
		}

		in( name: string, password: string ) {
			const user = this.domain().user().find( name )

			if ( !user || password !== user.password() ) {
				return this.$.$mol_fail(new Error( this.error().wrong_creds ))
			}

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
