import { name as FestaAdd } from '../festaAdd';
import { Festas } from '../../../../api/festas';
import 'angular-mocks';

describe('FestaAdd', () => {
  beforeEach(() => {
    window.module(FestaAdd);
  });

  describe('controller', () => {
    let controller;
    const party = {
      name: 'Foo',
      description: 'Birthday of Foo'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(FestaAdd, {
          $scope: $rootScope.$new(true)
        });
      });
    });

    describe('reset()', () => {
      it('should clean up party object', () => {
        controller.party = party;
        controller.reset();

        expect(controller.party).toEqual({});
      });
    });

    describe('submit()', () => {
      beforeEach(() => {
        spyOn(Parties, 'insert');
        spyOn(controller, 'reset').and.callThrough();

        controller.party = party;

        controller.submit();
      });

      it('should insert a new party', () => {
        expect(Parties.insert).toHaveBeenCalledWith(party);
      });

      it('should call reset()', () => {
        expect(controller.reset).toHaveBeenCalled();
      });
    });
  });
});
