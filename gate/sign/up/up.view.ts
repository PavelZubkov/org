namespace $.$$ {

	export class $org_gate_sign_up extends $.$org_gate_sign_up {

		@ $mol_action
		override submit_event() {
			const user = this.domain().user().create( this.name() , this.pass() )
			this.domain().sign().in( user )
		}

	}

}
