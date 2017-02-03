export class User {
    public Id: number;
    public Email: string;
    public EmailConfirmed: boolean;
    public PasswordHash: string;
    public SecurityStamp: string;
    public PhoneNumber: string;
    public PhoneNumberConfirmed: boolean;
    public TwoFactorEnabled: boolean;
    public LockoutEndDateUtc: string;
    public LockoutEnabled: boolean;
    public AccessFailedCount: number;
    public UserName: string;

    constructor() { }
}