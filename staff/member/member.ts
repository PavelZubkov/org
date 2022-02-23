namespace $ {

	export class $org_staff_member extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail('Not defined')
		}

		domain(): $org_staff_domain {
			return this.$.$mol_fail('Not defined')
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_staff_member' ).doc( this.id() )
		}

		first_name( next?: string ) {
			return String( this.state().sub( 'first_name' ).value( next ) ?? '' )
		}

		last_name( next?: string ) {
			return String( this.state().sub( 'last_name' ).value( next ) ?? '' )
		}

		email( next?: string ) {
			return String( this.state().sub( 'email' ).value( next ) ?? '' )
		}

	}

}
