namespace $.$$ {

	export class $org_goal_person extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail('Not defined')
		}

		domain(): $org_goal_domain {
			return this.$.$mol_fail('Not defined')
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'org_goal_person' ).doc( this.id() )
		}

		first_name( next?: string ) {
			return String( this.state().sub( 'first_name' ).value( next ) ?? '' )
		}

		last_name( next?: string ) {
			return String( this.state().sub( 'last_name' ).value( next ) ?? '' )
		}

		name() {
			return `${this.first_name()} ${this.last_name()}`
		}

		email( next?: string ) {
			return String( this.state().sub( 'email' ).value( next ) ?? '' )
		}

		bio( next?: string ) {
			return String( this.state().sub( 'bio' ).value( next ) ?? '' )
		}

		image( next?: string ) {
			return String( this.state().sub( 'image' ).value( next ) ?? '' )
		}

	}

}
