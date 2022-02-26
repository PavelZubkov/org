namespace $.$$ {

	export class $org_gate_user_service extends $.$org_gate_user_service {

		domain(): $org_gate_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_gate_user_service' )
		}

		@ $mol_mem
		list( next?: $org_gate_user[] ) {
			const id_list = this.state().sub( 'list' ).list( next && next.map( item => item.id() ) )
			const user_list = id_list.map( id => this.user( String(id) ) )
			return user_list
		}

		@ $mol_mem_key
		check_exists( name_or_id: string ) {
			return this.list().some( user => user.id() === name_or_id || user.username() === name_or_id )
		}

		@ $mol_mem_key
		user( id: string ) {
			const obj = new $org_gate_user
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this.domain() )
			return obj
		}

		find( name: string ) {
			return this.list().find( user => user.username() === name )
		}

		@ $mol_mem_key
		get( id: string ) {
			if ( !this.check_exists( id ) ) {
				return this.$.$mol_fail(new Error( this.error().not_exists ))
			}

			return this.user( id )
		}

		@ $mol_action
		create( name: string , password: string ) {
			const obj = new $org_gate_user
			obj.id = $mol_const( $mol_guid() )
			obj.domain = $mol_const( this.domain() )
			obj.username( name )
			obj.password( password )

			this.list( [ ...this.list() , obj ] )

			return this.get( obj.id() )
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
