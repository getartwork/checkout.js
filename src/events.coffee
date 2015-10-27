crowdcontrol = require 'crowdcontrol'
Events = crowdcontrol.Events

Events.Screen =
  TryNext:      'screen-try-next'
  Next:         'screen-next'
  Back:         'screen-back'
  UpdateScript: 'screen-update-script'
  DisableBack:  'screen-disable-back'
  EnableBack:   'screen-enable-back'
  SyncScript:   'screen-sync-script'

Events.Checkout =
  Update: 'checkout-update'
  Done: 'checkout-done'

Events.Modal =
  Open:         'modal-open'
  Close:        'modal-close'
  DisableClose: 'modal-disable-close'
  EnableClose:  'modal-enable-close'

Events.Confirm =
  Error:    'confirm-error'
  Hide:     'confirm-hide'
  Show:     'confirm-show'
  Lock:     'confirm-lock'
  Unlock:   'confirm-unlock'

Events.Invoice =
  Disable:  'invoice-disable'
  Enable:   'invoice-enable'
