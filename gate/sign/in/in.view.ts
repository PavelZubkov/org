namespace $.$$ {

	export class $org_gate_sign_in extends $.$org_gate_sign_in {

		override action() {
			this.domain().sign().in( this.name() , this.pass() )
		}

	}

}
