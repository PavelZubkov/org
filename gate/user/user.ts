namespace $.$$ {

	export class $org_gate_user_service extends $.$org_gate_user_service {

		domain(): $org_gate_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_gate_user_service' )
		}

		@ $mol_mem_key
		get( username: string ) {
			const obj = new $org_gate_user
			obj.id = $mol_const( username )
			obj.domain = $mol_const( this.domain() )
			return obj
		}

		@ $mol_action
		add( username: string , password: string ) {
			const obj = this.get( username )
			obj.username( username )
			obj.password( password )

			return obj
		}

	}

	export class $org_gate_user extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $org_gate_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_gate_user' ).doc( this.id() )
		}

		username( next?: string ) {
			return String( this.state().sub( 'name' ).value( next ) ?? '' )
		}

		password( next?: string ) {
			return String( this.state().sub( 'password' ).value( next ) ?? '' )
		}

		email( next?: string ) {
			return String( this.state().sub( 'email' ).value( next ) ?? '' )
		}


	}

}
